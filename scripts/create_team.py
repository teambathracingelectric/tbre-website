import json
import os

# Define the base directory
base_dir = '../resources/Website'

# Initialize the team structure
team = []

# Iterate through each sub-directory in the base directory
for category_dir in os.listdir(base_dir):
    category_path = os.path.join(base_dir, category_dir)
    if os.path.isdir(category_path):
        category = category_dir
        members = []

        # Iterate through each file in the sub-directory
        for file_name in os.listdir(category_path):
            if file_name.endswith('.jpg') or file_name.endswith('.jpeg') or file_name.endswith('.png'):
                # Extract member name from the file name
                name, _ = os.path.splitext(file_name)
                name = name.replace('_', ' ')

                # Create a member dictionary
                member = {
                    "name": name,
                    "image": f"/team/2023/{file_name}"
                }

                # Add the member to the members list
                members.append(member)

        # Create a category dictionary
        category_dict = {
            "category": category,
            "members": members
        }

        # Add the category dictionary to the team list
        team.append(category_dict)

# Convert the team structure to JSON
team_json = json.dumps(team, indent=4)

# Save the JSON to a file
with open('team.json', 'w') as json_file:
    json_file.write(team_json)

print("JSON file created successfully.")
