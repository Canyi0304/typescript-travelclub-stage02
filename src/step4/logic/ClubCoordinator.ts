import TravelClub from '../../step1/entity/TravelClub';
import TravelClubStore from '../storage/TravelClubStore';
import MemberHelper from './MemberHelper';


class ClubCoordinator {

    memberHelper:MemberHelper;
    clubStore:TravelClubStore;

    constructor() {
        
        this.memberHelper = new MemberHelper();
        this.clubStore = new TravelClubStore();
    }

    hasClubs(): boolean {

        return this.clubStore.count() !== 0;
    }

    exist(name: string): boolean {

        return this.clubStore.exist(name);
    }

    register(newClub: TravelClub): void {
        
        this.clubStore.store(newClub);
    }

    find(name: string): TravelClub{

        return this.clubStore.retrieve(name);
    }
}

export default ClubCoordinator;