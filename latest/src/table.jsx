function Table(){
   return(

<>
BOOKSHOPPIE <br></br>

<p>The World Belongs To Those who Read</p>
<input type="text"></input>




 
   <table className={style.table}>
   <thead>
       <tr className={style.tr}>
        <th className={style.th}>Book Name</th>
        <th className={style.th1}>Author</th>
       </tr>
   <tr>
  <td className={style.td}>A Nation To Protect </td>
   <td>Priyam Gandhi Mody</td>
   </tr>
   <tr>
    <td> Monsoon</td> 
     <td>Sahitya Akademi</td>  
   </tr>
   <tr>
       <td>The Endgame</td>
       <td>Hussain Zaidi</td></tr>
     <tr> 
       <td>The India Story</td>
       <td>Bimal Jalal</td></tr>
       <tr>
       <td>Making of Legend</td>
       <td>Bindeshwar Pathak </td></tr>
       <tr>
       <td>Arivu</td>
       <td>Dr Murali Mohan Chuntharu
           </td></tr></thead>
               <tbody>
                   {data.map((item, index) => (
                       <tr key={index}>
                           <td>{item.book}</td>
                           <td>{item.author}</td>
                       </tr>
                   ))}
               </tbody>
           </table>
           </>
             )
}
export default Table;