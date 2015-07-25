download :	 https://developer.android.com/sdk/index.html#top
			 pour faire fonctionner l'emul plus vite (pas encore tester et en phase de test par google): 
			 http://developer.android.com/tools/devices/emulator.html#acceleration
			
documentaion : http://lifehacker.com/i-want-to-write-android-apps-where-do-i-start-1643818268


Partir un projet sample (import sample) : moi j'ai pris un ActionBarCompat basic (c'est juste 
pour voir quelque chose au debut)

-Quand tous les SDK (ceux que le premier lien dit d'installer) sont installer, il va falloir faire un emulateur. 
	- Delete le premier emul (Juste pour pas avoir de problemes random a causes d'utiliseurs qui code a 5h du matin)
	- Creer un emul d'un nexus 5 
		NEXT
		-Release: Lollipop  
		-ABI: armeabi-v7a 
		-Target: Android 5.1.1
		NEXT
	-Si votre ordi a pas beaucoup de resolution il serait preferable que vous modifier
	la resolution de votre emul : 
		-Scale : 2 dp on device = 1px on screen ou 4 dp on device = 1 px on screen
		(ca peut être changer plus tard)
		-Portrait
		-Derniere option est a votre choix
		-Pour les advanced c'est des trucs de network qui pourront etre changer plus tard
		si on en a besoin
		
-Partir l'emul et attendre que tout soit parti et être sur la page de menu
-Partir le projet (le triangle comme d'habitude) choisir ton emul et l'option de toujours utiliser
l'emul l'application va s'installer sur l'emul et partir

TADA C'EST FINI



## JUnit
To add a new unit test:
- Create your test. You can do this by opening a class, right-clicking it's name and selecting "Go to > Test". Add some test cases.
- Right click your new test class or method and select "Run ...".
