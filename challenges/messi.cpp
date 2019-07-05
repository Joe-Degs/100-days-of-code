#include <iostream>
using namespace std;

int main()
{

	auto input=0;
	auto sum= 0;
cout<<"input the number to add up";
cout<<" or (0) to exit"<<endl;
 
 do {
 	   cout<<"input: ";cin>>input;
     sum=sum +input;
     cout<<endl;

 } while (input!=0);

   cout<<"sum: "<<sum;

	return 0;
}