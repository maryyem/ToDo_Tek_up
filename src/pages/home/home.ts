//// on va implementer les fonctions de suppression et mise a jour faite dans la page home.html////


deleteTask(index){
  this.taskList.splice(index, 1);


}

////pour l'update je vais ajouter une alerte pour ajouter le nouveau texte a mise a jour
import { NavController, AlertController } from 'ionic-angular';
//constructeur pour initialiser ce controlleur d'alerte ///
constructor(public navCtrl: NavController, public alertCtrl: AlertController)

//// la fonction de mise a jour ////
updateTask(index) {
  let alert = this.alertCtrl.create({
      title: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
                { text: 'Update', handler: data => {
                    this.taskList[index] = data.editTask; }
                }
               ]
  });
  alert.present();
}
