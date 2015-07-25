package mcoo.mcoo_gn_frontend;

/**
 * Created by Erika on 2015-07-25.
 */

import java.util.List;

public class CharacterSheet {
    String id;
    String name;
    String nationality;
    String race;
    String profession;
    String characterClass;
    String belief;
    int maxHp;
    List<String> skills;
    int xp;

    public CharacterSheet(String id, String name, String nationality, String race,
                          String profession, String characterClass,
                          String belief, int maxHp,
                          List<String> skills, int xp){
        this.id = id;
        this.name = name;
        this.nationality = nationality;
        this.race = race;
        this.profession = profession;
        this.characterClass = characterClass;
        this.belief = belief;
        this.skills = skills;
        this.maxHp = maxHp;
        this.xp = xp;
    }

    public String getId() { return id; }

    public String getCharacterClass() {
        return characterClass;
    }

    public void setCharacterClass(String characterClass) {
        this.characterClass = characterClass;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getBelief() {
        return belief;
    }

    public void setBelief(String belief) {
        this.belief = belief;
    }

    public int getMaxHp() {
        return maxHp;
    }

    public void setMaxHp(int maxHp) {
        this.maxHp = maxHp;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public int getXp() {
        return xp;
    }

    public void setXp(int xp) {
        this.xp = xp;
    }

    public void addXp(int addedXp) throws IllegalArgumentException{
        if( addedXp < 0){
            throw new IllegalArgumentException("Can not add negative XP");
        }
        this.xp += addedXp;
    }

    public void addMaxHp(int addedHp) throws IllegalArgumentException{
        if( addedHp < 0){
            throw new IllegalArgumentException("Can not add negative HP");
        }
        this.maxHp += addedHp;
    }
}

