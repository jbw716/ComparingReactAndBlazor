var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
var app = builder.Build();
app.UseCors(options => options.AllowAnyOrigin());
app.UseHttpsRedirection();

app.MapGet("/numbers", () =>
{
    return Enumerable.Range(0, 1000000).ToArray();
});

app.Run();