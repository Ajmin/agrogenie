import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout,SimpleRNN
from tensorflow.keras.optimizers import Adam
from sklearn.model_selection import train_test_split

# Load the dataset (adjust the path to where your data is located)
data = pd.read_csv('soybean_data_soilgrid250_modified_states_9.csv')

# Select features and target
X = data.drop(columns=['yield', 'loc_ID', 'year'])  # Exclude target 'yield', 'loc_ID', and 'year' from features
y = data['yield']

# Normalize the features (important for neural networks)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Reshape data to be in 3D shape [samples, time steps, features] for LSTM
X_scaled = X_scaled.reshape(X_scaled.shape[0], 1, X_scaled.shape[1])

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Define the RNN-LSTM model
model = Sequential()
model.add(SimpleRNN(units=50, activation='relu', input_shape=(X_train.shape[1], X_train.shape[2]), return_sequences=True))
# Add LSTM layer
model.add(LSTM(units=50, activation='relu', input_shape=(X_train.shape[1], X_train.shape[2]), return_sequences=False))

# Add a Dropout layer to prevent overfitting
model.add(Dropout(0.2))

# Add Dense layer (fully connected)
model.add(Dense(units=1))

# Compile the model
model.compile(optimizer=Adam(), loss='mean_squared_error')

# Train the model
model.fit(X_train, y_train, epochs=50, batch_size=32, validation_data=(X_test, y_test))

# Make predictions
y_pred = model.predict(X_test)

# You can use y_pred for further evaluation, for example:
print("Actual Values: ", y_test[:5].values)
print("Predicted Values: ",y_pred[:5])  # Print first 5 predicted values

# To save the model for later use
model.save('yield_prediction_model.h5')

loss = model.evaluate(X_test, y_test)
print(f"Test Loss: {loss}") 