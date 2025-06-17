import re
import json

# TikZ input as a multiline string
tikz_data = """
[TIKZ DATA]
"""

# Extract all coordinate blocks
coordinate_blocks = re.findall(r'coordinates\s*{([^}]*)}', tikz_data, re.DOTALL)

def parse_coordinates(block):
    # Find all (x, y) pairs and convert them to dicts
    return [
        {'x': int(x), 'y': float(y)}
        for x, y in re.findall(r'\((\d+),\s*([0-9.]+)\)', block)
    ]

datasets = []
colors = ['#42A5F5', '#EF5350']  # blue, red
labels = ['Training', 'Validation']

# Build the JS object
for i, block in enumerate(coordinate_blocks):
    data = parse_coordinates(block)
    datasets.append({
        'label': labels[i],
        'data': data,
        'fill': False,
        'borderColor': colors[i],
        'tension': 0.3,
        'showLine': True
    })

chart_data = {
    'datasets': datasets
}

# Pretty print as JavaScript-style JSON
print('this.chartData =', json.dumps(chart_data, indent=2))
