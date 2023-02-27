import ClubMember from "../../step1/entity/ClubMember";
import RoleInClub from "../../step1/entity/RoleInClub";
import TravelClub from "../../step1/entity/TravelClub";

class MemberHelper {

    constructor() {
        
    }

    hasMembers(club: TravelClub): boolean{
        return club.members.length !== 0;
    }

    modify(member: ClubMember, newValueMap: Map<string, string>): void {

        const keyIter = newValueMap.keys();
        let keyIterResult = keyIter.next();

        while (keyIterResult.value) {
            
            const key = keyIterResult.value;
            let value = newValueMap.get(key) || '';

            switch (key) {
                case 'name':
                    member.name = value;
                    break;
                case 'nickname':
                    member.nickname = value;
                    break;
                case 'phoneNumber':
                    member.phoneNumber = value;
                    break;
                case 'birthday':
                    member.birthday = value;
                    break;
                case 'role':
                    member.role = value as RoleInClub;
                    //member 객체의 role 속성에 RoleInClub 타입의 value 값을 할당
                    break;
            }

            keyIterResult = keyIter.next();
        }
    }

    exist(club:TravelClub, email: string): boolean {

        for(const member of club.members){
            if (member.email === email) {
                return true;
            }
        }

        return false;
    }

    register(club: TravelClub, newMember:ClubMember): string{

        if (this.exist(club, newMember.email)) {
            return '';
        }

        club.members.push(newMember);

        return newMember.email;
    }

    find(club: TravelClub, email: string): ClubMember | null {

        for(const member of club.members){
            if (member.email === email) {
                return member;
            }
        }

        return null;
    }

    remove(club: TravelClub, clubMember:ClubMember): void {

        const index = clubMember.name.indexOf(clubMember.name);
        club.members.splice(index,1)

        //club.members 배열에서 clubMember를 제거하는 역할
    }
}

export default MemberHelper;