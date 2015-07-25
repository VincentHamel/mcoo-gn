package mcoo.mcoo_gn_frontend;

import java.util.ArrayList;
import java.util.Arrays;

/**
 * Created by Erika on 2015-07-25.
 */
public class FakeCharacterRepository implements CharacterRepository {

    @Override
    public CharacterSheet findById(int id) {
        CharacterSheet fakeSheet = new CharacterSheet(id, "McTesto", "Scottish", "Human", "Musician",
                "Bard", "Pagan", 500, new ArrayList<String>(Arrays.asList("berseker")), 10);
        return fakeSheet;
    }
}
