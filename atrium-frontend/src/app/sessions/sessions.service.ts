
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SessionModel} from "./sessionModel";

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  apiUrl: string = 'http://localhost:8001/api/sessions';

  constructor(private http: HttpClient) { }

  async getAllSessions(): Promise<SessionModel[]> {
    const uspromise = await this.http.get<SessionModel[]>(this.apiUrl).toPromise()
    return uspromise.map( a => {
      const id = a.id;
      const name = a.name;
      const procedureId = a.procedureId;
      const participants = a.participants;
      const additionalInfo = a.additionalInfo;
      return {id, name, procedureId, participants, additionalInfo} as unknown as SessionModel;
    })
  }

  deleteSession(id: number): Observable<any>{
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createSession(session: SessionModel): Observable<SessionModel> {
    return this.http.post<SessionModel>(this.apiUrl, session);
  }

  async getSessionById(id: number): Promise<SessionModel>{
    const uspromise = await this.http.get<SessionModel>(this.apiUrl + '/' + id).toPromise();
    return uspromise as SessionModel;
  }

  updateSession(session: SessionModel): Observable<SessionModel> {
    return this.http.put<SessionModel>(this.apiUrl + '/' + session.id, session);
  }
}
