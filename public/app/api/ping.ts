import {Injectable}     from 'angular2/core'
import {Http, Response} from 'angular2/http'
import 'rxjs/add/operator/map'

@Injectable()

export class PingApi {
  constructor (
    private http: Http
  ) {}

  run() {
    return this.http.get('/api/v1/ping').map((res:Response) => res.json())
  }
}
