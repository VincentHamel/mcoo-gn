package mcoo.mcoo_gn_frontend;


import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ListView;

import java.util.ArrayList;
import java.util.List;


/**
 * Created by Vince on 2015-07-28.
 */
public class RealPlayerActivity extends ActionBarActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_character);

        EditText textViewrealPlayerName = (EditText) findViewById(R.id.realplayer_name);
        EditText textViewCharacterNationality = (EditText) findViewById(R.id.character_nationality);
        EditText textViewCharacterRace = (EditText) findViewById(R.id.character_race);
        EditText textViewCharacterProfession = (EditText) findViewById(R.id.character_profession);
        EditText textViewCharacterClass = (EditText) findViewById(R.id.character_class);
        EditText textViewCharacterBelief = (EditText) findViewById(R.id.character_belief);
        EditText textViewCharacterMaxHP = (EditText) findViewById(R.id.character_max_hp);
        ListView listViewSkills = (ListView) findViewById(R.id.character_skills);
        EditText textViewCharacterXP = (EditText) findViewById(R.id.character_xp);

        List<String> skills = new ArrayList<String>();
        skills.add("meditation");
        skills.add("decrypt");
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(listViewSkills.getContext(), android.R.layout.simple_list_item_1, skills);
        listViewSkills.setAdapter(adapter);

        textViewrealPlayerName.setText("Julieta");
        textViewCharacterNationality.setText("French");
        textViewCharacterRace.setText("Dwarf");
        textViewCharacterProfession.setText("Forgeron");
        textViewCharacterClass.setText("Wizard");
        textViewCharacterBelief.setText("My belief");
        textViewCharacterMaxHP.setText("300");
        textViewCharacterXP.setText("4");
    }

}
