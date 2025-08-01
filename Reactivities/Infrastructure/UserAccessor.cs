using System;
using System.Security.Claims;
using Application.Interfaces;
using Domain;
using Microsoft.AspNetCore.Http;
using Persistence;

namespace Infrastructure;

public class UserAccessor(IHttpContextAccessor httpContextAccessor, AppDbContext dbcontext) : IUserAccessor
{
    public string GetUserId()
    {
        return httpContextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.NameIdentifier)
        ?? throw new Exception("User not found");
    }

    public async Task<User> GeUserAsync()
    {
        return await dbcontext.Users.FindAsync(GetUserId())
        ?? throw new Exception("User not found");
    }
}
