package mcoo.mcoo_gn_frontend;

import android.os.Parcelable;

public interface CharacterRepository{
   abstract CharacterSheet findById(int id);
}
