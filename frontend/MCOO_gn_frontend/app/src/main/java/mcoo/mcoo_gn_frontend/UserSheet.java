package mcoo.mcoo_gn_frontend;

import android.support.annotation.NonNull;

import java.util.ArrayList;
import java.util.Collection;
import java.util.EmptyStackException;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

/**
 * Created by Vince on 2015-07-28.
 */
public class UserSheet {

    String id;
    String name;
    String email;
    String telephone;
    ArrayList <CharacterSheet> characterList;

    public UserSheet(String id, String name, String email,
                          String telephone){
        this.id = id;
        this.name = name;
        this.email = email;
        this.telephone = telephone;

        ArrayList<CharacterSheet> characterList = new ArrayList<CharacterSheet>();
    }

    public String getId() { return id; }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public CharacterSheet getCharacter(String id) {
        for (int i = 0; i< characterList.size(); i++)
        {
            if (characterList.get(i).id == id)
            {
                return characterList.get(i);
            }
        }
        throw new IllegalArgumentException();
    }


}

