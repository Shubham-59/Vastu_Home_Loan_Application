import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailes } from '../model/user-detailes';
import { EnquiryForm } from '../model/enquiry-form';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
   
  getAuthUser(username:string,password:string):Observable<UserDetailes>
  {
   return this.http.get<UserDetailes>('http://localhost:8080/userDetailes/user/'+username+"/"+password)
  }
saveEmployeeDerailes(userDetailes:FormData)
{
  return this.http.post('http://localhost:8080/userDetailes/user',userDetailes)
}

getAllEmployeeDetailes()
{
  return this.http.get('http://localhost:8080/userDetailes/allUser');
}
updateEmployeeDetailes(user:FormData)
{
  const userId = user.get('userId'); //userId' is the key for user ID in the FormData
return this.http.put('http://localhost:8080/userDetailes/updateUser/'+userId,user)
}
deleteEmployee(userId:number){
  return this.http.delete('http://localhost:8080/userDetailes/deleteUser/'+userId)
}
getEmployeeById(userId: number) {
  return this.http.get("http://localhost:8080/userDetailes/getUserDetailesById/" + userId);
}
saveUserEnquiryDetailes(userEnquiry:EnquiryForm)
{
return this.http.post('http://localhost:8081/enquiry/save_enquiryinfo', userEnquiry);
}

getAllEnquiry(){
  return this.http.get('http://localhost:8081/enquiry/getAllEnquiryData')
}
getAllForwardEnquityByOE()
{

  return this.http.get('http://localhost:8081/getAllForward_Enquiry_By_Re/Forwarded')
}
getAllLoanEnquityCount()
{
  return this.http.get("http://localhost:8081/enquiry/getAllEnquiryCount")
}

gellAllenquiryCount()
{
  return this.http.get('http://localhost:8081/enquiry/getAllEnquiryCount')
}
getAllEnquiryCountApproved()
{
  return this.http.get('http://localhost:8081/enquiry/getAllEnquiryCountApproved')
}

getAllEnquiryCountRejected()
{
  return this.http.get('http://localhost:8081/enquiry/getAllEnquiryCountRejected')
}
} 
