# your code :>
import sys
import json

def main():
    input_data = sys.stdin.read()

    try:
        data = json.loads(input_data)
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}", file=sys.stderr)
        sys.exit(1)

    prices = [items['currentPrice'] for items in data]
    ratings = [items['rating'] for items in data]
    gender = [items['gender'] for items in data]

    highest_price = max(prices)
    lowest_price = min(prices)
    average_price = round(sum(prices) / len(prices), 2)
    highest_rating = max(ratings)
    average_rating = round(sum(ratings) / len(ratings), 2)
    total_rooms = len(data)

    gender_count = {'Campur':0, 'Putra':0, 'Putri':0}
    for gen in gender :
        if gen in gender_count :
            gender_count[gen] += 1;
    
    gender_proportion = {key: value / total_rooms for key, value in gender_count.items()}


    # Create a dictionary with the data you want to return
    response = {
        "prices": prices,
        "ratings": ratings,
        "highest_price": highest_price,
        "lowest_price": lowest_price,
        "average_price": average_price,
        "average_rating": average_rating,
        "highest_rating": highest_rating,
        "total_rooms": total_rooms,
        "gender_count": gender_count,
        "received_data": data,
    }
    
    # Convert the dictionary to a JSON string
    json_response = json.dumps(response)
    
    # Print the JSON string to stdout (which will be captured by Node.js)
    print(json_response)

if __name__ == "__main__":
    main()