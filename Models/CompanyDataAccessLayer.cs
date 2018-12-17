using Microsoft.EntityFrameworkCore;  
using System;  
using System.Collections.Generic;  
using System.Linq;  
using System.Threading.Tasks;
using tl_react_redux_dotnet.Models;

namespace tl
{
    public class CompanyDataAccessLayer
    {
        react_tlContext db = new react_tlContext();

        public IEnumerable<Company> getAllCompanies()
        {
            try
            {
                return db.Company.ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        
    }
}