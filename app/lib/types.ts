export class LombaData {
    id : string = "";
    title : string = "";
    description : string = ""
}

export class BeasiswaData {
    id : string = "";
    title : string = "";
    description : string = ""
}

export class SeminarData {
    id : string = "";
    title : string = "";
    description : string = ""
}

export class LombaBriefData {
    id : string = "";
    title : string = "";
}

export class SeminarBriefData {
    id : string = "";
    title : string = "";
}

export class BeasiswaBriefData {
    id : string = "";
    title : string = "";
}

export class LombaListData {
    count : Number = 0;
    lomba : LombaBriefData[] = [];
}

export class SeminarListData {
    count : Number = 0;
    seminar : SeminarBriefData[] = [];
}

export class BeasiswaListData {
    count : Number = 0;
    beasiswa : BeasiswaBriefData[] = [];
}

export class UserBriefData {
    id : string = "";
    username : string = "";
    profilePictureSrc : string = "";
}

export class UserData {
    id : string = "";
    username : string = "";
    profilePictureSrc : string = "";
    job : string = "";
    tags : string = "";
    description : string = ""
}
