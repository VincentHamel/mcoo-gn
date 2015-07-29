package mcoo.mcoo_gn_frontend;

import android.content.Context;

public class RepositoryFactory {
    static public CharacterRepository getCharacterRepository(Context context){
        if(! BuildConfig.USE_REAL_API) {
            return new FakeCharacterRepository();
        } else{
            return new RealApiCharacterRepository(context);
        }
    }
}
