export class User {
    uid: string;
    name: string;
    email: string;
    subject: string;
    schedule: Array<{
        day: string,
        session: string
    }> = [];
    accessLevel: 'teacher' | 'student' | 'admin' | null;
    constructor(data) {
        this.uid = data && data.uid;
        this.name = data && data.name;
        this.email = data && data.email;
        this.subject = data && data.subject;
        const overallSchedule = data && data.schedule || null;
        if(overallSchedule) {
            Object.keys(overallSchedule).forEach(day => {
                this.schedule.push({day, session: overallSchedule[day]});
            });
        }
        this.accessLevel = data && data.accessLevel || null;
    
    }
}