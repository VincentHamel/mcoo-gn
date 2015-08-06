package mcoo.mcoo_gn_frontend;

import android.content.Intent;
import android.graphics.Color;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.util.Patterns;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import java.util.regex.Pattern;

public class MainActivity extends ActionBarActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final EditText textEmail = (EditText) findViewById(R.id.textEmail);
        final Button  btnLogin = (Button) findViewById(R.id.btnLogin);
        textEmail.setOnFocusChangeListener(new View.OnFocusChangeListener() {
            @Override
            public void onFocusChange(View v, boolean hasFocus) {
                if (!hasFocus) {
                    if (!isValidEmail(textEmail.getText().toString())){
                        textEmail.setError("Invalid e-mail format");
                        btnLogin.setEnabled(false);
                    }
                    else
                        btnLogin.setEnabled(true);
                }
            }
        });
    }

    private boolean isValidEmail(String email) {
        Pattern pattern = Patterns.EMAIL_ADDRESS;
        return pattern.matcher(email).matches();
    }

    public void onClickLogin(View v){
        Intent intent = new Intent(this, UserActivity.class);
        startActivity(intent);
    }
    // move to useractivity
    /*
    public void onCharacterClick(View v){
        Intent intent = new Intent(this, CharacterActivity.class);
        startActivity(intent);
    }
    */

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
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


   // public void NouveauButton(View v) {setContentView(R.layout.wabajaba);}


}
