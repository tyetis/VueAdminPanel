using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;

namespace VueWebApi.Providers
{
    public interface ITokenProvider
    {
        string CreateToken(int userId);
        int? GetUserId { get; }
    }
}
