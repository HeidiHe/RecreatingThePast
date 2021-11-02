using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GenerateCubes : MonoBehaviour
{

    [SerializeField]private float interval;
    [SerializeField]private GameObject cubePrefab;
    private float timer;
    // Start is called before the first frame update
    void Start()
    {
        timer = 0f;
    }

    // Update is called once per frame
    void Update()
    {
        timer += Time.deltaTime;
        if (timer >= interval) {
            timer = timer % interval;
            generate_new_cube();
        }
    }


    private void generate_new_cube(){
       float x = Random.Range(-5, 5);
        float y = Random.Range(-5, 5);
        float z = Random.Range(-0.5f, 0.5f);
        int r = Random.Range(-10, 10);

        // GameObject cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
        Instantiate(cubePrefab, new Vector3(x, y, z), Quaternion.identity);
        cubePrefab.transform.rotation = Quaternion.Euler(0, 90+r, 0);
    }
}
