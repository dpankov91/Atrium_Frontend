import {ProcedureModel} from "./procedureModel";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {

  apiUrl: string = 'http://localhost:8001/api/procedures';

  constructor(private http: HttpClient) { }

  async getAllProcedures(): Promise<ProcedureModel[]> {
    const uspromise = await this.http.get<ProcedureModel[]>(this.apiUrl).toPromise()
    return uspromise.map( a => {
      const id = a.id
      const name = a.name;
      const isCivil = a.isCivil == 1 ? "Civil" : "Criminal";
      const additionalInfo = a.additionalInfo;
      return {id, name, isCivil, additionalInfo} as unknown as ProcedureModel;
    })
  }

  deleteProcedure(id: number): Observable<any>{
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createProcedure(procedure: ProcedureModel): Observable<ProcedureModel> {
    return this.http.post<ProcedureModel>(this.apiUrl, procedure);
  }

  async getProcedureById(id: number): Promise<ProcedureModel>{
    const uspromise = await this.http.get<ProcedureModel>(this.apiUrl + '/' + id).toPromise();
    return uspromise as ProcedureModel;
  }

  updateProcedure(procedure: ProcedureModel): Observable<ProcedureModel> {
    return this.http.put<ProcedureModel>(this.apiUrl + '/' + procedure.id, procedure);
  }
}
