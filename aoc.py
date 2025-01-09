import googlemaps
import numpy as np
import random

# Initialize Google Maps client
API_KEY = 'Enter Your API Key Here'
gmaps = googlemaps.Client(key=API_KEY)

# Function to get distances and times between locations
def fetch_distance_matrix(locations):
    n = len(locations)
    distance_matrix = np.zeros((n, n))
    time_matrix = np.zeros((n, n))
    
    for i in range(n):
        for j in range(n):
            if i == j:
                distance_matrix[i][j] = 0
                time_matrix[i][j] = 0
            else:
                result = gmaps.distance_matrix(origins=locations[i], destinations=locations[j], mode="driving")
                distance = result['rows'][0]['elements'][0]['distance']['value']  # in meters
                time = result['rows'][0]['elements'][0]['duration']['value']  # in seconds
                distance_matrix[i][j] = distance
                time_matrix[i][j] = time
    return distance_matrix, time_matrix

# ACO Parameters
ALPHA = 1.0  # Pheromone influence
BETA = 2.0   # Heuristic influence
RHO = 0.5    # Evaporation rate
Q = 100      # Pheromone deposit factor
NUM_ANTS = 10
NUM_ITERATIONS = 50

# Initialize pheromones
def initialize_pheromones(num_locations):
    return np.ones((num_locations, num_locations))

# Heuristic function: inverse of distance
def heuristic(distance):
    return 1 / distance if distance > 0 else 0

# Select next location
def select_next_location(current_location, visited, pheromones, distances):
    probabilities = []
    for i in range(len(distances)):
        if i not in visited:
            tau = pheromones[current_location][i] ** ALPHA
            eta = heuristic(distances[current_location][i]) ** BETA
            probabilities.append((i, tau * eta))
    total = sum(prob[1] for prob in probabilities)
    probabilities = [(loc, prob / total) for loc, prob in probabilities]
    next_location = random.choices(
        [loc for loc, _ in probabilities],
        weights=[prob for _, prob in probabilities]
    )[0]
    return next_location

# ACO algorithm
def ant_colony_optimization(locations, distance_matrix):
    num_locations = len(locations)
    pheromones = initialize_pheromones(num_locations)
    best_route = None
    best_distance = float('inf')

    for _ in range(NUM_ITERATIONS):
        all_routes = []
        all_distances = []
        
        for _ in range(NUM_ANTS):
            current_location = 0  # Start from the first location
            visited = [current_location]
            total_distance = 0

            while len(visited) < num_locations:
                next_location = select_next_location(current_location, visited, pheromones, distance_matrix)
                total_distance += distance_matrix[current_location][next_location]
                visited.append(next_location)
                current_location = next_location
            
            # Complete the loop
            total_distance += distance_matrix[current_location][0]
            visited.append(0)

            all_routes.append(visited)
            all_distances.append(total_distance)

            # Update best route
            if total_distance < best_distance:
                best_route = visited
                best_distance = total_distance

        # Update pheromones
        for route, distance in zip(all_routes, all_distances):
            for i in range(len(route) - 1):
                pheromones[route[i]][route[i+1]] += Q / distance

        # Evaporation
        pheromones *= (1 - RHO)

    return best_route, best_distance

# Main function
def main():
    # Example locations
    locations = [
        "Mumbai",
        "Haldwani",
        "Chandigarh",
        "Kerela"
    ]
    
    # Fetch distance and time matrices
    distance_matrix, time_matrix = fetch_distance_matrix(locations)
    
    # Run ACO to find the optimal route
    best_route, best_distance = ant_colony_optimization(locations, distance_matrix)
    
    # Translate indices back to location names
    best_route_locations = [locations[i] for i in best_route]

    print("Optimal Route:", " -> ".join(best_route_locations))
    print(f"Total Distance: {best_distance / 1000:.2f} km")  # Convert to kilometers

if __name__ == "__main__":
    main()





