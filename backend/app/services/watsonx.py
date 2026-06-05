import os
from ibm_watsonx_ai.foundation_models import ModelInference
from ibm_watsonx_ai.metanames import GenTextParamsMetaNames as GenParams
from ibm_watsonx_ai.credentials import Credentials

def get_watsonx_model(model_id="meta-llama/llama-3-3-70b-instruct"):
    api_key = os.getenv("IBM_API_KEY")
    url = os.getenv("IBM_URL")
    project_id = os.getenv("IBM_PROJECT_ID")
    
    if not api_key or not project_id:
        raise ValueError("IBM watsonx.ai credentials are not fully set.")

    credentials = Credentials(
        api_key=api_key,
        url=url
    )
    
    parameters = {
        GenParams.DECODING_METHOD: "greedy",
        GenParams.MAX_NEW_TOKENS: 4000,
        GenParams.REPETITION_PENALTY: 1.05
    }
    
    model = ModelInference(
        model_id=model_id,
        params=parameters,
        credentials=credentials,
        project_id=project_id
    )
    return model

def generate_text(prompt: str) -> str:
    model = get_watsonx_model()
    # The Llama 3 models often expect a specific prompt format, but passing raw text usually works if it's instruct
    # Formatting as a basic Llama-3 prompt:
    formatted_prompt = f"<|begin_of_text|><|start_header_id|>user<|end_header_id|>\n\n{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n"
    
    response = model.generate(prompt=formatted_prompt)
    if "results" in response and len(response["results"]) > 0:
        return response["results"][0]["generated_text"].strip()
    return ""
