# Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS base
WORKDIR /app
COPY StatesCountriesApi.csproj .
RUN dotnet restore "StatesCountriesApi.csproj"
COPY . .
CMD ["dotnet", "watch", "run", "--urls", "http://0.0.0.0:5257"]

FROM base AS build
RUN dotnet publish "StatesCountriesApi.csproj" -c Release -o /publish

# Serve 
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /publish .

EXPOSE 5257

ENTRYPOINT ["dotnet", "StatesCountriesApi.dll"]