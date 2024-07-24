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

    # Create a dictionary with the data you want to return
    response = {
        "highest_price": 0,
        "lowest_price": 0,
        "average_price": 0,
        "average_rating": 0,
        "highest_rating": 0,
        "received_data": data,
    }
    
    # Convert the dictionary to a JSON string
    json_response = json.dumps(response)
    
    # Print the JSON string to stdout (which will be captured by Node.js)
    print(json_response)

if __name__ == "__main__":
    main()