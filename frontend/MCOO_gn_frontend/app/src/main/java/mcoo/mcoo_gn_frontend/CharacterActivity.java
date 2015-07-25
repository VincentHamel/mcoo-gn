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

import java.util.List;


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
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_character);

        CharacterSheet character = CharacterRepositoryFactory.getCharacterRepository().findById(1);

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

        List<String> skills = character.getSkills();
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(listViewSkills.getContext(), R.layout.custom_edittext, skills);
        listViewSkills.setAdapter(adapter);

        textViewCharacterName.setText(character.getName());
        textViewCharacterNationality.setText(character.getNationality());
        textViewCharacterRace.setText(character.getRace());
        textViewCharacterProfession.setText(character.getProfession());
        textViewCharacterClass.setText(character.getCharacterClass());
        textViewCharacterBelief.setText(character.getBelief());
        textViewCharacterMaxHP.setText(String.valueOf(character.getMaxHp()));
        textViewCharacterXP.setText(String.valueOf(character.getXp()));
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

    public void onClickEditCharacter(View v){
        textViewCharacterName.setEnabled(true);
        textViewCharacterNationality.setEnabled(true);
        textViewCharacterRace.setEnabled(true);
        textViewCharacterProfession.setEnabled(true);
        textViewCharacterClass.setEnabled(true);
        textViewCharacterBelief.setEnabled(true);
        textViewCharacterMaxHP.setEnabled(true);
        textViewCharacterXP.setEnabled(true);

        buttonEditCharacter.setVisibility(View.INVISIBLE);
        buttonUpdateCharacter.setVisibility(View.VISIBLE);
    }

    public void onClickUpdateCharacter(View v){
        textViewCharacterName.setEnabled(false);
        textViewCharacterNationality.setEnabled(false);
        textViewCharacterRace.setEnabled(false);
        textViewCharacterProfession.setEnabled(false);
        textViewCharacterClass.setEnabled(false);
        textViewCharacterBelief.setEnabled(false);
        textViewCharacterMaxHP.setEnabled(false);
        textViewCharacterXP.setEnabled(false);

        buttonEditCharacter.setVisibility(View.VISIBLE);
        buttonUpdateCharacter.setVisibility(View.INVISIBLE);
    }
}
