package mcoo.mcoo_gn_frontend;

public class CharacterRepositoryFactory {
    static public CharacterRepository getCharacterRepository(){
        if(! BuildConfig.USE_REAL_API) {
            return new FakeCharacterRepository();
        } else{
            return new FakeCharacterRepository();
        }
    }
}
