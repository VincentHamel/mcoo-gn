package mcoo.mcoo_gn_frontend;


import android.content.Intent;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;


/**
 * Created by Vince on 2015-07-28.
 */
public class UserActivity extends ActionBarActivity {
    EditText textViewUserName;
    EditText textViewUserEmail;
    EditText textViewUserTelephone;

    Button buttonViewCharacter;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user);

        EditText textViewUserName = (EditText) findViewById(R.id.UserName);
        EditText textViewUserEmail = (EditText) findViewById(R.id.UserEmail);
        EditText textViewUserTelephone = (EditText) findViewById(R.id.UserTelephone);

        textViewUserName.setText("Julieta nunez cledon");
        textViewUserEmail.setText("dummy@hotmail.com");
        textViewUserTelephone.setText("819-666-5555");
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
    public void onCharacterClick(View v){
        Intent intent = new Intent(this, CharacterActivity.class);
        startActivity(intent);
    }
}