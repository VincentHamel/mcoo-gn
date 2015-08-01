package mcoo.mcoo_gn_frontend;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.concurrent.CountDownLatch;

import static org.junit.Assert.*;

public class FakeCharacterRepositoryTest {
    CharacterSheet character1;
    FakeCharacterRepository rep1;

    @Before
    public void setUp() throws Exception {
        character1 = new CharacterSheet("1", "McTesto", "Scottish", "Human", "Musician",
                "Bard", "Pagan", 500, new ArrayList<String>(Arrays.asList("berseker","meditation","programmation")), 10);
        rep1 = new FakeCharacterRepository();
    }

    @After
    public void tearDown() throws Exception {
        character1 = null;
    }

    @Test
    public void testFindById() throws Exception {
        final CountDownLatch signal = new CountDownLatch(1);

        rep1.findById("1", new Response.Listener<CharacterSheet>() {
            @Override
            public void onResponse(CharacterSheet c) {
                assertTrue(character1.equals(c));
                signal.countDown();
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                signal.countDown();
            }
        });
        signal.await();
    }
}