package mcoo.mcoo_gn_frontend;

import com.android.volley.Response;

import java.util.ArrayList;
import java.util.Arrays;

/**
 * Created by Erika on 2015-07-25.
 */
public class FakeCharacterRepository implements CharacterRepository {

    @Override
    public void findById(String id, Response.Listener<CharacterSheet> onSuccess,
                         Response.ErrorListener onError) {
        onSuccess.onResponse(new CharacterSheet(id, "McTesto", "Scottish", "Human", "Musician",
                "Bard", "Pagan", 500, new ArrayList<String>(Arrays.asList("berseker","meditation","programmation")), 10));
    }
}
