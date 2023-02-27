import RoleInClub from "./RoleInClub";


class ClubMember {

    email: string = '';
    name: string = '';
    nickname: string = '';
    phoneNumber: string = '';
    birthday: string = '';
    role: RoleInClub = RoleInClub.Member;

    constructor(email: string, name: string, phoneNumber: string) {
        
        this.setEmail(email);
        this.name = name;
        this.phoneNumber = phoneNumber;
        
    }

    setEmail(email: string): void {

        if (!this.isValidEmailAddress(email)) {
            throw new Error("이메일 형식이 잘못되었습니다 ----> " + email);
        }

        this.email = email;
    }

    isValidEmailAddress(email: string): boolean {

        const epattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";

        return !!email.match(epattern);

        /* 
        장규 표현식
        이메일 주소는 @ 기호를 포함해야 합니다.
        @ 기호 앞에는 하나 이상의 문자(알파벳 대소문자, 숫자, 특수문자 !#$%&'*+/=?^_{|}~-`)가 올 수 있습니다.
        @ 기호 뒤에는 . 기호와 하나 이상의 문자(알파벳 대소문자)가 올 수 있습니다.
        이메일 주소는 유효한 도메인 이름과 TLD(top-level domain)를 가지고 있어야 합니다.
        */
    }

    inviteLeader(): ClubMember {

        const leader = new ClubMember('test@test.co.kr', 'gil dong Hong', '010-0000-0000');

        leader.role = RoleInClub.President;
        return leader;
    }

    inviteMember(): ClubMember {

        return new ClubMember('memberlee@nextree.co.kr', 'nara Lee', '010-0001-0002');
    }
}

export default ClubMember