# ASSURANT 1A CAPSTONE

Welcome to the Break Through Tech Assurant 1A team project. Our goal is to analyze several datasets defining what it is to be a secure codebase, and using this knowledge to train a Random Forest Regressor to demonstrate the security/unsecurity of a given codebase. With our target label being the boolean 'secure', with 1 representing secure and 0 representing not secure, we aim to conclude if a given codebase is secure based on historical insecure codebases.

## Project Description

This project involves the analysis and classification of code snippets to determine their security status. We utilized machine learning techniques to build a model that can predict whether a given code snippet is secure or insecure. The project is structured into several components, including data loading, preprocessing, model training, evaluation, and visualization.

## Goal

The primary goal of this project is to develop a machine learning model that can accurately classify code snippets as secure or insecure. By leveraging historical data of secure and insecure codebases, we aim to build a robust classifier that can assist in identifying potential security vulnerabilities in code. For real world impact, this can help with new software engineers pick up their workspace's tech stack very quickly. 

## Data

We worked with multiple datasets, including:
- **Targeted-Data-Poisoning-Attacks**: This dataset contains both clean and poisoned code samples.
- **SecurityEval**: This dataset is in JSON format and contains insecure code samples.

### Data Loading

We cloned the datasets from their respective repositories and loaded them into our environment. The data was then processed to match a consistent format, with each code snippet labeled as either secure (0) or insecure (1).

### Data Preprocessing

To prepare the data for model training, we performed several preprocessing steps:
- **Combining Datasets**: We merged the clean, poisoned, and new datasets into a single training dataset.
- **Shuffling Data**: The combined dataset was shuffled to ensure a random distribution of samples.
- **Cleaning Code**: We used NLTK and custom stopwords to clean the code snippets by removing common English and Python-specific stopwords.

## Models

We chose the Random Forest Classifier as our primary model due to its robustness and ability to handle complex datasets. The model training process involved several steps:

### Feature Extraction

We used `TfidfVectorizer` to convert the code snippets into TF-IDF feature vectors, capturing the importance of terms within the code.

### Hyperparameter Tuning

We performed hyperparameter tuning using Grid Search with cross-validation to find the best combination of parameters for the Random Forest model. The parameter grid included:
- `n_estimators`: Number of trees in the forest.
- `max_depth`: Maximum depth of the trees.
- `min_samples_split`: Minimum number of samples required to split an internal node.

### Model Training

The best model identified by Grid Search was trained on the entire training dataset. The model was then evaluated on the test set to assess its performance.

## Insights and Illustrations

### Evaluation Metrics

We evaluated the model using several metrics, including precision, recall, F1 score, and accuracy. The classification report provided detailed insights into the model's performance for each class (secure and insecure).

### Feature Importance

We extracted and visualized the feature importance from the Random Forest model to understand which terms contributed most to the classification decisions.

### Confusion Matrix

The confusion matrix illustrated the model's performance in predicting class labels, highlighting the true positives, true negatives, false positives, and false negatives.

### ROC Curve

We plotted the Receiver Operating Characteristic (ROC) curve to visualize the trade-off between the true positive rate and false positive rate, and calculated the Area Under the Curve (AUC) to quantify the model's performance.

### Precision vs Recall vs F1 Score

We created a bar chart to compare the precision, recall, and F1 score for each class, providing a comprehensive view of the model's strengths and weaknesses.

## Future Steps
If we had more time to dive deep into the project, we would implement:
- A threshold-based confidence scoring mechanism where low-confidence predictions are flagged for manual review.
- Our current model is able to identify true negatives - the truly insecure data with a good amount of accuracy. Moving forward, we want false negatives and false positives to be flagged for manual review.
- Provide individual scores for each security protocol (e.g., error handling, input validation) to offer more insightful results.
- Add new features to our model for ranking between the codebases, allowing us to see the most secure of the codebases.
- Allow for a user to input a codebase and have the model evaluate the input codebase against our secure and insecure codebases within our datasets.

## Conclusion

In conclusion, this project successfully demonstrated the use of machine learning techniques to classify code snippets based on their security status. The Random Forest Classifier proved to be an effective model for this task, achieving a test set accuracy of approximately 73%. The insights gained from feature importance and evaluation metrics provided valuable information for understanding the factors contributing to code security. This project lays the foundation for further research and development in automated code security analysis.