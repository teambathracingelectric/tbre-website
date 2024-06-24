import json
import os
import shutil

# Define the base directory
base_dir = '../resources/Website'
output_dir = '../resources/All_Photos'

# Create the output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Initialize the team structure
team = []

# Iterate through each sub-directory in the base directory
for category_dir in os.listdir(base_dir):
    category_path = os.path.join(base_dir, category_dir)
    if os.path.isdir(category_path) and category_dir != 'All_Photos':
        category = category_dir
        members = []

        # Iterate through each file in the sub-directory
        for file_name in os.listdir(category_path):
            if file_name.endswith('.jpg') or file_name.endswith('.jpeg') or file_name.endswith('.png'):
                # Extract member name from the file name
                name, ext = os.path.splitext(file_name)
                name = name.replace(' ', '_').lower()

                # Define the new file name and path
                new_file_name = f"{name}{ext}"
                new_file_path = os.path.join(output_dir, new_file_name)

                # Copy and rename the file to the output directory
                shutil.copyfile(os.path.join(category_path, file_name), new_file_path)

                # Create a member dictionary
                member = {
                    "name": name.replace('_', ' ').title(),
                    "image": f"/team/2024/{new_file_name}"
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

print("JSON file and directory created successfully.")
