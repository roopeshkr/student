export class StudentModel {
    id:number=0
    firstname:string=''
    lastname:string=''
    emailid:string=''

    constructor(id:number=0,
        firstname:string='',
        lastname:string='',
        emailid:string=''){
            this.id=id
            this.firstname=firstname
            this.lastname=lastname
            this.emailid=emailid
        }
}
