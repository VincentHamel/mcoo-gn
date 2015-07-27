package mcoo.mcoo_gn_frontend;

import java.util.ArrayList;
import java.util.List;

import android.app.Activity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Spinner;

/**
 * Created by Vince on 2015-07-27.
 */
public class CharacterSpinner extends Activity{
    Spinner characterSpinner;

    public void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.realplayer);

        characterSpinner = (Spinner) findViewById(R.id.characterSpinner);

        List CharList = new ArrayList();
        CharList.add("Bob");
        CharList.add("Jess E. James");
        CharList.add("Rocky Balboa");
        CharList.add("Ulcror The Wabajaba");

        ArrayAdapter adapter = new ArrayAdapter( this,
                android.R.layout.simple_spinner_item, CharList );

        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        characterSpinner.setAdapter(adapter);
    }

}
