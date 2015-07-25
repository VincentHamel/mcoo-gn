package mcoo.mcoo_gn_frontend;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.Assert.*;

/**
 * Created by Erika on 2015-07-25.
 */
public class FakeCharacterRepositoryTest {
    CharacterSheet character1;
    FakeCharacterRepository rep1;

    @Before
    public void setUp() throws Exception {
        character1 = new CharacterSheet(1, "McTesto", "Scottish", "Human", "Musician",
                "Bard", "Pagan", 500, new ArrayList<String>(Arrays.asList("berseker")), 10);
        rep1 = new FakeCharacterRepository();
    }

    @After
    public void tearDown() throws Exception {
        character1 = null;
    }

    @Test
    public void testFindById() throws Exception {
        assertEquals(character1, rep1.findById(1));
    }
}