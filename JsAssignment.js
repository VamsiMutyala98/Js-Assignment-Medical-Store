var tr1=document.getElementById("one").innerHTML;
                    var tr2=document.getElementById("two").innerHTML;
                    var tr3=document.getElementById("three").innerHTML;
                    var x=document.getElementById("row1")
                    var y=document.getElementById("row2")
                    var z=document.getElementById("row3")
                    // first row
                    var arr=tr1.split("-");
                    arr[0]=Number(arr[0])+3;
                    var str=arr.join("-");
                    var date1=new Date(str);
                    var v1=date1.valueOf();

                    // second Row
                    var arr1=tr2.split("-");
                    arr1[0]=Number(arr1[0])+3;
                    var str1=arr1.join("-");
                    var date2=new Date(str1);
                    var v2=date2.valueOf();

                    // Third Row
                    var arr2=tr3.split("-");
                    arr2[0]=Number(arr2[0])+3;
                    var str2=arr2.join("-");
                    var date3=new Date(str2);
                    var v3=date3.valueOf();

                    window.onload=()=>{
                        var var1    =prompt("Enter the Year");
                        var s1=new Date(var1);
                        var s2=s1.valueOf();
                        console.log(str1,str2,str);
                        if(s2>=v1){
                            x.style.backgroundColor="red";
                        }
                        if(s2>=v2){
                            y.style.backgroundColor="red";
                        }
                        if(s2>=v3){
                            z.style.backgroundColor="red";
                        }
                    }