package mcoo.mcoo_gn_frontend;

import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.RelativeLayout;
import java.util.List;
import com.android.volley.VolleyError;
import com.android.volley.Response;

public class CharacterActivity extends ActionBarActivity {
    EditText textViewCharacterName;
    EditText textViewCharacterNationality;
    EditText textViewCharacterRace;
    EditText textViewCharacterProfession;
    EditText textViewCharacterClass;
    EditText textViewCharacterBelief;
    EditText textViewCharacterMaxHP;
    ListView listViewSkills;
    EditText textViewCharacterXP;
    Button buttonEditCharacter;
    Button buttonUpdateCharacter;
    Button buttonCancelCharacter;
    CharacterSheet currentCharacter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_character);

        //Must always be done because these items are used in onClick events
        textViewCharacterName = (EditText) findViewById(R.id.character_name);
        textViewCharacterNationality = (EditText) findViewById(R.id.character_nationality);
        textViewCharacterRace = (EditText) findViewById(R.id.character_race);
        textViewCharacterProfession = (EditText) findViewById(R.id.character_profession);
        textViewCharacterClass = (EditText) findViewById(R.id.character_class);
        textViewCharacterBelief = (EditText) findViewById(R.id.character_belief);
        textViewCharacterMaxHP = (EditText) findViewById(R.id.character_max_hp);
        listViewSkills = (ListView) findViewById(R.id.character_skills);
        textViewCharacterXP = (EditText) findViewById(R.id.character_xp);
        buttonEditCharacter = (Button) findViewById(R.id.character_edit_button);
        buttonUpdateCharacter = (Button) findViewById(R.id.character_update_button);
        buttonCancelCharacter = (Button) findViewById(R.id.character_cancel_button);

        RepositoryFactory.getCharacterRepository(this).findById("55b647c2924605dc0c7c8484", new Response.Listener<CharacterSheet>() {
            @Override
            public void onResponse(CharacterSheet c) {
                List<String> skills = c.getSkills();
                ArrayAdapter<String> adapter = new ArrayAdapter<String>(listViewSkills.getContext(), R.layout.custom_edittext, skills);
                listViewSkills.setAdapter(adapter);
                currentCharacter = c;

                textViewCharacterName.setText(c.getName());
                textViewCharacterNationality.setText(c.getNationality());
                textViewCharacterRace.setText(c.getRace());
                textViewCharacterProfession.setText(c.getProfession());
                textViewCharacterClass.setText(c.getCharacterClass());
                textViewCharacterBelief.setText(c.getBelief());
                textViewCharacterMaxHP.setText(String.valueOf(c.getMaxHp()));
                textViewCharacterXP.setText(String.valueOf(c.getXp()));
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                RelativeLayout character_layout = (RelativeLayout) findViewById(R.id.character_layout);
                character_layout.setVisibility(View.INVISIBLE);

                RelativeLayout character_layout_404 = (RelativeLayout) findViewById(R.id.character_layout_404);
                character_layout_404.setVisibility(View.VISIBLE);
            }
        });

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_character, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    public void disableControls() {
        textViewCharacterName.setEnabled(false);
        textViewCharacterNationality.setEnabled(false);
        textViewCharacterRace.setEnabled(false);
        textViewCharacterProfession.setEnabled(false);
        textViewCharacterClass.setEnabled(false);
        textViewCharacterBelief.setEnabled(false);
        textViewCharacterMaxHP.setEnabled(false);
        textViewCharacterXP.setEnabled(false);
    }

    public void enableControls() {
        textViewCharacterName.setEnabled(true);
        textViewCharacterNationality.setEnabled(true);
        textViewCharacterRace.setEnabled(true);
        textViewCharacterProfession.setEnabled(true);
        textViewCharacterClass.setEnabled(true);
        textViewCharacterBelief.setEnabled(true);
        textViewCharacterMaxHP.setEnabled(true);
        textViewCharacterXP.setEnabled(true);
    }
    public void onClickEditCharacter(View v){
        enableControls();
        buttonEditCharacter.setVisibility(View.INVISIBLE);
        buttonUpdateCharacter.setVisibility(View.VISIBLE);
        buttonCancelCharacter.setVisibility(View.VISIBLE);
    }

    public void onClickUpdateCharacter(View v){
        disableControls();
        buttonEditCharacter.setVisibility(View.VISIBLE);
        buttonUpdateCharacter.setVisibility(View.INVISIBLE);
        buttonCancelCharacter.setVisibility(View.INVISIBLE);
    }

    public void onClickCancelCharacter(View v){
        disableControls();
        textViewCharacterName.setText(currentCharacter.getName());
        textViewCharacterNationality.setText(currentCharacter.getNationality());
        textViewCharacterRace.setText(currentCharacter.getRace());
        textViewCharacterProfession.setText(currentCharacter.getProfession());
        textViewCharacterClass.setText(currentCharacter.getCharacterClass());
        textViewCharacterBelief.setText(currentCharacter.getBelief());
        textViewCharacterMaxHP.setText(String.valueOf(currentCharacter.getMaxHp()));
        textViewCharacterXP.setText(String.valueOf(currentCharacter.getXp()));

        buttonEditCharacter.setVisibility(View.VISIBLE);
        buttonUpdateCharacter.setVisibility(View.INVISIBLE);
        buttonCancelCharacter.setVisibility(View.INVISIBLE);
    }
}
