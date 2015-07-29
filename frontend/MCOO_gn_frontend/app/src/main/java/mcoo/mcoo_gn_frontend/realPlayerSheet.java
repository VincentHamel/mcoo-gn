package mcoo.mcoo_gn_frontend;

import android.support.annotation.NonNull;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

/**
 * Created by Vince on 2015-07-28.
 */
public class realPlayerSheet {

    String id;
    String name;
    String lastName;
    String email;
    String telephone;
    String GNPost;
    ArrayList <CharacterSheet> characterList;



    public realPlayerSheet(String id, String name, String lastName, String email,
                          String telephone, String GNPost){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.telephone = telephone;
        this.GNPost = GNPost;

        ArrayList<CharacterSheet> characterList = new ArrayList<CharacterSheet>();

    }

    public String getId() { return id; }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }


    public void addCharacter(CharacterSheet sheetToon) {
        characterList.add(sheetToon);
    }
    public void removeCharacter(CharacterSheet sheetToon) {
        characterList.remove(sheetToon);
    }

    public CharacterSheet getCharacter(String name) {
        List<String> skills = new ArrayList<String>();
        CharacterSheet x= new CharacterSheet("no id","no name","no last name","no nationality","no race"
                ,"no profession","no class", 1,skills, 1 );
        for (int i = 0; i< characterList.size(); i++)
        {
            if (characterList.get(i).name == name)
                x= characterList.get(i);
            // else: ben ya pas trouver le personnage, donc erreur = wabajaba
        }
        return x;
    }


}



