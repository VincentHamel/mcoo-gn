package mcoo.mcoo_gn_frontend;

import android.content.Context;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class RealApiCharacterRepository implements CharacterRepository {

    private RequestQueue queue;

    public RealApiCharacterRepository(Context context) {
        queue = Volley.newRequestQueue(context);
    }

    @Override
    public void findById(String id, final Response.Listener<CharacterSheet> onSuccess,
                                   final Response.ErrorListener onError) {

        String url = "http://" + BuildConfig.SERVER_ENDPOINT + "/character/" + id;

        JsonObjectRequest request = new JsonObjectRequest(Request.Method.GET, url,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject res) {
                        try {
                            List<String> skills = new ArrayList<String>();
                            JSONArray jsonSkills = res.getJSONArray("skills");
                            for (int i=0; i<jsonSkills.length(); i++) {
                                skills.add( jsonSkills.getString(i) );
                            }

                            onSuccess.onResponse(new CharacterSheet(
                                    res.getString("_id"),
                                    res.getString("name"),
                                    res.getString("nationality"),
                                    res.getString("race"),
                                    res.getString("profession"),
                                    res.getString("class"),
                                    res.getString("belief"),
                                    res.getInt("max_hp"),
                                    skills,
                                    res.getInt("xp")));
                        } catch(JSONException e) {
                            onError.onErrorResponse(new VolleyError(e.getMessage()));
                        }
                    }
                }, onError);
        queue.add(request);
    }
}
