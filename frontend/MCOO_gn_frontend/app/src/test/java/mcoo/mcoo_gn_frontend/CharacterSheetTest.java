package mcoo.mcoo_gn_frontend;

import static org.junit.Assert.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;

/**
 * Created by Erika on 2015-07-25.
 */


public class CharacterSheetTest {

    CharacterSheet character;

    @Before
    public void setUp() throws Exception {
        character = new CharacterSheet(1, "name", "nationality", "race", "profession", "class",
                "belief", 100,
                new ArrayList<String>(Arrays.asList("skill1","skill2")),
                450);
    }

    @After
    public void tearDown() throws Exception {
        character = null;
    }

    @Test
    public void testAddXp() throws Exception {
        character.addXp(15);
        assertEquals(465, character.getXp());
    }

    @Test
    public void testAddHp() throws Exception {
        character.addMaxHp(20);
        assertEquals(120, character.getMaxHp());
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddInvalidXp() throws Exception {
        character.addXp(-20);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddInvalidHp() throws Exception {
        character.addMaxHp(-20);
    }
}