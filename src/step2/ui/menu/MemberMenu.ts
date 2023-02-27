import { question } from 'readline-sync';
import MemberWindows from '../console/MemberWindow';

class MemberMenu {

    memberWindows:MemberWindows;

    constructor() {
        this.memberWindows = new MemberWindows();
    }

    showMenu(): void{
        
        let inputNumber = 0;

        while(true){

            this.displayMenu();
            inputNumber = this.selectMenu();

            switch (inputNumber) {
                case 1:
                    this.memberWindows.findClub();
                    break;
                case 2:
                    this.memberWindows.find();
                    break;
                case 3:
                    this.memberWindows.add();
                    break;
                case 4:
                    this.memberWindows.modify();
                    break;
                case 5:
                    this.memberWindows.remove();
                    break;
                case 0:
                    return;
                default:
                    console.log('Choose Again!');
            }
        }
    }

    displayMenu():void {

      console.log('......................');
      console.log('[Members Menu]');
      console.log('......................');
      console.log(' 1. Find a club');
      console.log(' 2. Add member');
      console.log(' 3. Find a member');
      console.log(' 4. Modify a member');
      console.log(' 5. Remove a member');
      console.log('......................');
      console.log(' 0. Previous');
      console.log('......................');

    }

    selectMenu(): number {

        const answer = question('Select number :');
        const menuNumber = parseInt(answer);

        if (menuNumber >= 0 && menuNumber<=5) {
            return menuNumber;
        }

        else{
            console.log('It\'s a invalid number --> ' + menuNumber);
            return -1;
        }
    }
}

export default MemberMenu;