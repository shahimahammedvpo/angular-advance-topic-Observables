import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, of, Subject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
private http=inject(HttpClient);
searchText=new Subject<string>();

products$=this.searchText.pipe(
  debounceTime(500),
  switchMap((text)=>
    this.http.get<any>(
      ` https://dummyjson.com/products/search?q=${text}`
    )
  )
)
}