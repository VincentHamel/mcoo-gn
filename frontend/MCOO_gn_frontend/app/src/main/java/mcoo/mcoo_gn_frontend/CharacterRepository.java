package mcoo.mcoo_gn_frontend;

import com.android.volley.Response;

public interface CharacterRepository {
    void findById(String id, Response.Listener<CharacterSheet> onSuccess,
                            Response.ErrorListener onError);
}
