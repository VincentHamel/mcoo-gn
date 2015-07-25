package mcoo.mcoo_gn_frontend;

public class CharacterRepositoryFactory {
    static public CharacterRepository getCharacterRepository(){
        return new FakeCharacterRepository();
    }
}
