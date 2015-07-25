package mcoo.mcoo_gn_frontend;

import android.app.ListActivity;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;


public class CharacterActivity extends ActionBarActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_character);

        EditText textViewCharacterName = (EditText) findViewById(R.id.character_name);
        EditText textViewCharacterNationality = (EditText) findViewById(R.id.character_nationality);
        EditText textViewCharacterRace = (EditText) findViewById(R.id.character_race);
        EditText textViewCharacterProfession = (EditText) findViewById(R.id.character_profession);
        EditText textViewCharacterClass = (EditText) findViewById(R.id.character_class);
        EditText textViewCharacterBelief = (EditText) findViewById(R.id.character_belief);
        EditText textViewCharacterMaxHP = (EditText) findViewById(R.id.character_max_hp);
        ListView listViewSkills = (ListView) findViewById(R.id.character_skills);
        EditText textViewCharacterXP = (EditText) findViewById(R.id.character_xp);

        String[] skills = {"meditation","decrypt"};
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(listViewSkills.getContext(), android.R.layout.simple_list_item_1, skills);
        listViewSkills.setAdapter(adapter);

        textViewCharacterName.setText("Michael");
        textViewCharacterNationality.setText("French");
        textViewCharacterRace.setText("Dwarf");
        textViewCharacterProfession.setText("Forgeron");
        textViewCharacterClass.setText("Wizard");
        textViewCharacterBelief.setText("My belief");
        textViewCharacterMaxHP.setText("300");
        textViewCharacterXP.setText("4");
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
}
