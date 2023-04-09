# Start with the official .NET 6.0 SDK image
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env

# Set the working directory to /app
WORKDIR /app

# Copy the project file to the working directory
COPY *.csproj ./

# Restore NuGet packages
RUN dotnet restore

# Copy the remaining source code to the working directory
COPY . ./

# Build the application
RUN dotnet publish -c Release -o out

# Create a new image to run the application
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build-env /app/out .

# Expose port 80 for the application
EXPOSE 5000

# Start the application
ENTRYPOINT ["dotnet", "ProductGrpcService.dll"]